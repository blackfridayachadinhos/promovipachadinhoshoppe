(() => {
  'use strict';

  const config = window.PROMOVIP_CONFIG || {};
  const groupUrl = typeof config.whatsappGroupUrl === 'string'
    ? config.whatsappGroupUrl.trim()
    : '';
  const joinButton = document.getElementById('join-group');
  const buttonTitle = document.getElementById('button-title');
  const buttonSubtitle = document.getElementById('button-subtitle');
  const toast = document.getElementById('setup-toast');

  const isValidWhatsAppInvite = (value) => {
    try {
      const url = new URL(value);
      return url.protocol === 'https:' &&
        (url.hostname === 'chat.whatsapp.com' || url.hostname === 'wa.me');
    } catch (_) {
      return false;
    }
  };

  if (joinButton && isValidWhatsAppInvite(groupUrl)) {
    joinButton.href = groupUrl;
    joinButton.removeAttribute('aria-disabled');
    buttonTitle.textContent = 'Quero entrar no grupo';
    buttonSubtitle.textContent = 'Acesse pelo WhatsApp em um toque';
  } else if (joinButton) {
    joinButton.href = '#grupo';
    joinButton.setAttribute('aria-disabled', 'true');
    buttonTitle.textContent = 'Grupo em configuração';
    buttonSubtitle.textContent = 'O convite será ativado nesta página';
  }

  let toastTimer;
  const showSetupMessage = () => {
    if (!toast) return;
    toast.textContent = 'O link oficial do grupo ainda não foi inserido. Envie o convite do WhatsApp para ativar este botão.';
    toast.classList.add('is-visible');
    window.clearTimeout(toastTimer);
    toastTimer = window.setTimeout(() => toast.classList.remove('is-visible'), 4200);
  };

  joinButton?.addEventListener('click', (event) => {
    if (!isValidWhatsAppInvite(groupUrl)) {
      event.preventDefault();
      showSetupMessage();
      return;
    }

    // Evento padrão Meta Ads: permite medir cliques de entrada no grupo.
    if (typeof window.fbq === 'function') {
      window.fbq('track', 'Lead', {
        content_name: 'PromoVip Achadinhos',
        content_category: 'Grupo de ofertas no WhatsApp',
        destination: 'WhatsApp'
      });
    }
  });
})();
