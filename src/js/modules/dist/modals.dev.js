"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var modals = function modals() {
  function bindModal(triggerSelector, modalSelector, closeSelector) {
    var closeClickOverlay = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    var trigger = document.querySelectorAll(triggerSelector),
        modal = document.querySelector(modalSelector),
        close = document.querySelector(closeSelector),
        windows = document.querySelectorAll('[data-modal]'),
        scroll = calcScroll();
    trigger.forEach(function (item) {
      item.addEventListener('click', function (e) {
        if (e.target) {
          e.preventDefault();
        }

        windows.forEach(function (item) {
          item.style.display = 'none';
        });
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
        document.body.style.marginRight = "".concat(scroll, "px"); // document.body.classList.add('modal-open');
      });
    });
    close.addEventListener('click', function () {
      windows.forEach(function (item) {
        item.style.display = 'none';
      });
      modal.style.display = "none";
      document.body.style.overflow = ""; // document.body.classList.remove('modal-open');

      document.body.style.marginRight = "0px";
    });
    modal.addEventListener('click', function (e) {
      if (e.target === modal && closeClickOverlay) {
        windows.forEach(function (item) {
          item.style.display = 'none';
        });
        modal.style.display = "none";
        document.body.style.overflow = ""; // document.body.classList.remove('modal-open');

        document.body.style.marginRight = "0px";
      }
    });
  }

  function showModalByTime(selector, time) {
    setTimeout(function () {
      document.querySelector(selector).style.display = 'block';
      document.body.style.overflow = "hidden";
    }, time);
  }

  function calcScroll() {
    var div = document.createElement('div');
    div.style.width = '50px';
    div.style.width = '50px';
    div.style.overflowY = 'scroll';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    var scrollWidth = div.offsetWidth - div.clientWidth;
    div.remove();
    return scrollWidth;
  }

  bindModal('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
  bindModal('.phone_link', '.popup', '.popup .popup_close');
  bindModal('.popup_calc_btn', '.popup_calc', '.popup_calc_close');
  bindModal('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile_close', false);
  bindModal('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false); // showModalByTime('.popup', 60000);
};

var _default = modals;
exports["default"] = _default;