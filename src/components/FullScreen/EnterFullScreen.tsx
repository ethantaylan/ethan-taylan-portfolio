import React from 'react';
import { IoMdClose } from 'react-icons/io';
import './enter-full-screen.scss';

interface EnterFullScreen {
  className: string;
}

export const EnterFullScreen: React.FC<EnterFullScreen> = ({ className }) => {
  function handleFullScreen() {
    document.body.requestFullscreen();
    setModal(false);
  }
  const [modal, setModal] = React.useState<boolean>();
  const [fullScreenModeSelected, setFullScreenModeSelected] =
    React.useState<boolean>(false);

  React.useEffect(() => {
    setTimeout(() => {
      setModal(true);
    }, 1000);
  }, []);

  React.useEffect(() => {
    setTimeout(() => {
      setModal(false);
    }, 4500);
  }, []);

  React.useEffect(() => {
    if (fullScreenModeSelected === true) {
      setTimeout(() => {
        setFullScreenModeSelected(false);
      }, 3000);
    }
  }, [fullScreenModeSelected]);

  return (
    <React.Fragment>
      <div
        className={` ${className} ${
          modal
            ? 'd-flex align-items-center flex-column enter-full-screen-container'
            : 'd-none'
        } `}
      >
        <h1 className="mb-5">
          For a better navigation experience, go to full screen mode.
        </h1>
        <div className="d-flex">
          <button
            className="fullscreen-btn"
            onClick={() => {
              handleFullScreen();
              setFullScreenModeSelected(true);
            }}
          >
            Enter full screen
          </button>
          <IoMdClose
            onClick={() => setModal(false)}
            size={20}
            className="close-btn"
          />
        </div>
      </div>
      <div className="another-modal">
        {fullScreenModeSelected && (
          <h1 className="fullscreenselected">
            To close the full screen mode press F11
          </h1>
        )}
      </div>
    </React.Fragment>
  );
};

export default EnterFullScreen;
