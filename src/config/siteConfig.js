// ============================================================
//  ARCHIVO CENTRAL DE CONFIGURACIÓN
//  Este es el ÚNICO archivo que necesitas tocar para:
//   - cambiar precios
//   - cambiar enlaces de pago (Hotmart, Cuanto, WhatsApp...)
//   - cambiar tus redes sociales
//   - activar/desactivar programas que aún no estén a la venta
//
//  No necesitas tocar ningún componente ni saber programar.
//  Guarda el archivo y la página se actualiza sola.
// ============================================================

export const siteConfig = {
  // ---------- PRECIOS (se muestran tal cual, como texto) ----------
  prices: {
    renacer: '315',
    amate: '88',
    arte: '127',
    magnetica: '177',
    vip: '777',
  },

  // ---------- ENLACES DE PAGO EXTERNOS ----------
  // Pega aquí el link de Hotmart, Cuanto o cualquier checkout externo.
  // Mientras esté vacío (''), el botón abrirá tu WhatsApp con un mensaje
  // automático, para que nunca pierdas una venta por un link faltante.
  checkout: {
    renacer: '',
    amate: '',
    arte: '',
    magnetica: '',
    vip: '',
  },

  // ---------- DISPONIBILIDAD ----------
  // Cambia a false para mostrar un programa como "Próximamente"
  // en vez del botón de compra.
  available: {
    renacer: true,
    amate: true,
    arte: true,
    magnetica: true,
    vip: true,
  },

  // ---------- REDES Y CONTACTO ----------
  social: {
    instagram: 'https://instagram.com/tu_usuario',
    tiktok: 'https://tiktok.com/@tu_usuario',
    whatsapp: '50760000000', // solo números, con código de país, sin + ni espacios
    email: 'hola@manifestacionmagnetica.com',
  },

  // Mensaje que se envía por WhatsApp cuando aún no hay link de checkout.
  // Cada programa tiene el suyo, para que puedas identificar de un vistazo
  // qué quiere comprar la persona y responder con tus respuestas rápidas.
  whatsappMessages: {
    renacer: 'Hola Karla, quiero comenzar mi RENACER completo (las 3 fases) 🌿 ¿Me cuentas cómo inscribirme?',
    amate: 'Hola Karla, quiero comenzar Ámate 🌿 ¿Me cuentas cómo inscribirme?',
    arte: 'Hola Karla, quiero comenzar El Arte de la Energía 🌿 ¿Me cuentas cómo inscribirme?',
    magnetica: 'Hola Karla, quiero comenzar Magnética 🌿 ¿Me cuentas cómo inscribirme?',
    vip: 'Hola Karla, quiero información sobre el Acompañamiento VIP 1:1 🌿',
  },
  whatsappMessageDefault: 'Hola Karla, quiero comenzar mi RENACER 🌿 ¿Me cuentas cómo inscribirme?',
}

// Genera el link de WhatsApp con el mensaje indicado
export function whatsappLink(message = siteConfig.whatsappMessageDefault) {
  const text = encodeURIComponent(message)
  return `https://wa.me/${siteConfig.social.whatsapp}?text=${text}`
}

// Devuelve el link correcto para un botón de compra:
// usa el checkout externo si existe (Hotmart, Cuanto...), si no, cae a
// WhatsApp con el mensaje específico de ese programa — así identificas
// de inmediato qué quiere comprar la persona antes de contestar.
export function purchaseLink(key, customMessage) {
  const external = siteConfig.checkout[key]
  if (external && external.trim() !== '') return external
  const message = customMessage || siteConfig.whatsappMessages[key] || siteConfig.whatsappMessageDefault
  return whatsappLink(message)
}
