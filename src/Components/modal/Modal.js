import React, { useRef, useEffect, useCallback } from 'react';
import { useSpring, animated } from 'react-spring';
import { Icon } from '@iconify/react';
import './modal.css';
function Modal({ showModal, setShowModal }) {
  const ModalRef = useRef();
  const animation = useSpring({
    config: {
      duration: 250,
    },
    opacity: showModal ? 1 : 0,
    transform: showModal ? `translateY(0%)` : 'translateY(-100%)',
  });

  const closeModal = (e) => {
    if (ModalRef.current === e.target) {
      setShowModal(false);
    }
  };

  const keyPress = useCallback(
    (e) => {
      if (e.key === 'Escape' && showModal) {
        {
          setShowModal(false);
        }
      }
    },
    [setShowModal, showModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', keyPress);
    return () => {
      document.removeEventListener('keydown', keyPress);
    };
  });

  return (
    <div>
      {showModal ? (
        <div className="modal-container" ref={ModalRef} onClick={closeModal}>
          <animated.div style={animation}>
            <div className="modal-wrapper">
              {/* <img></img> */}
              <div className="modal-content">
                <div className="modal-title">
                  <h1>Shikoyat</h1>
                  <button
                    className="icon"
                    onClick={() => setShowModal(!showModal)}
                  >
                    <Icon icon="bi:x-lg" />
                  </button>
                </div>
                <div className="modal__img">
                  <span>Shikoyat qilish</span>
                  <div className="modal-check-group">
                    <div className="lines">
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
                <div className="complaint-checkbox">
                  <div className="radio-title">
                    Ushbu e’londa nima noto‘g‘ri?
                  </div>
                  <form action="">
                    <div className="radio-group">
                      <input id="1" name="radio" type="radio" />
                      <label htmlFor="1">Spam</label>
                    </div>
                    <div className="radio-group">
                      <input id="2" name="radio" type="radio" />
                      <label htmlFor="2">Noto‘g‘ri kategoriya</label>
                    </div>
                    <div className="radio-group">
                      <input id="3" name="radio" type="radio" />
                      <label htmlFor="3">
                        Taqiqlangan mahsulot xizmati yoki tarkibi
                      </label>
                    </div>
                    <div className="radio-group">
                      <input id="4" name="radio" type="radio" />
                      <label htmlFor="4">Reklama</label>
                    </div>
                    <div className="radio-group">
                      <input id="5" name="radio" type="radio" />
                      <label htmlFor="5">Fribgarlik</label>
                    </div>
                    <button className="modal-submit">Yuborish</button>
                  </form>
                </div>
              </div>
            </div>
          </animated.div>
        </div>
      ) : null}
    </div>
  );
}

export default Modal;
