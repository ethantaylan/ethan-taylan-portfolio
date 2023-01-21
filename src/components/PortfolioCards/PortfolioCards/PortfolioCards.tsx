import React, { Children } from 'react';
import { Button, Card } from 'react-bootstrap';
import { BsCode, BsCodeSlash } from 'react-icons/bs';
import StaticModal from '../../StaticModal/StaticModal';
import './portfolio-cards.scss';

interface PortfolioCardsProps {
  img: any;
  projectNumber: string;
  projectSubName: string;
  projectText: string;
  href?: string;
  isModalActive?: boolean;
  children: any;
}

const PortfolioCards: React.FC<PortfolioCardsProps> = ({
  projectText,
  projectNumber,
  projectSubName,
  img,
  href,
  isModalActive,
  children,
}) => {
  const [showModal, setShowModal] = React.useState(false);

  const handleClose = () => setShowModal(false);
  const handleShow = () => setShowModal(true);

  return (
    <div className="d-flex mb-5 align-items-center flex-column">
      {isModalActive && (
        <StaticModal
          modalTitle={projectSubName}
          modalButtonActive={false}
          handleClose={handleClose}
          showModal={showModal}
		  children={children}
        />
      )}
      <div className="h-100 w-100 d-flex flex-row align-items-center">
        <div className="d-flex flex-column w-100 m-4">
          <span className="mb-3 card-title">
            {`${'Project'} ${projectNumber}`}
            <span className="subcard-title">
              {`${' //_'}${projectSubName}`}
            </span>
          </span>
          <Card
            className="primary"
            style={{ backgroundColor: '#001221', width: '100%' }}
          >
            <Card.Img
              onClick={handleShow}
              variant="top"
              src={img}
              className="my-border portfolio-img-style"
            />
            <Card.Body style={{ padding: '20px', backgroundColor: '#001221' }}>
              <Card.Text className="mb-4 line-height-20">
                {projectText}
              </Card.Text>
              <a href={href} target="_blank" rel="noopener noreferrer">
                <Button
                  className="p-2"
                  style={{
                    color: '#607b96',
                    borderRadius: '3px',
                    border: 'none',
                    backgroundColor: '#1C2B3A'
                  }}
                >
                  <BsCode size={18} />
                </Button>
              </a>
            </Card.Body>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCards;