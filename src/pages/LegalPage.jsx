import { Link } from 'react-router-dom'
import styles from './LegalPage.module.css'

const paginas = {
  condiciones: {
    titulo: 'Condiciones de uso',
    intro: 'Estas condiciones regulan el acceso y el uso de Travel Us, una herramienta para organizar viajes en grupo.',
    secciones: [
      {
        titulo: '1. Titular y contacto',
        contenido: <>
          <p>Travel Us es un proyecto gestionado por Priscila Nunes. Para consultas sobre el servicio o estas condiciones, puedes escribir mediante el <a href="/#contacto">formulario de contacto</a>.</p>
          {/* TODO: Añadir la identidad legal completa y el domicilio de contacto antes de publicar. */}
        </>,
      },
      {
        titulo: '2. Cuenta y acceso',
        contenido: <p>Para usar las funciones privadas necesitas crear una cuenta con un email válido. Debes proporcionar información veraz, mantener la confidencialidad de tus credenciales y avisar si sospechas que alguien ha accedido a tu cuenta sin permiso. Eres responsable de la actividad realizada desde tu sesión.</p>,
      },
      {
        titulo: '3. Uso de los viajes y contenido compartido',
        contenido: <p>Travel Us permite crear viajes, invitar integrantes y compartir itinerarios, mensajes, enlaces, documentos, imágenes, gastos y otros datos relacionados con el viaje. El contenido que añadas puede ser visible para las personas integrantes de ese viaje. Añade únicamente información que tengas derecho a compartir y evita subir datos sensibles o documentos de identidad si no son necesarios.</p>,
      },
      {
        titulo: '4. Uso aceptable',
        contenido: <p>No debes usar Travel Us para actividades ilegales, para vulnerar derechos de otras personas, enviar contenido abusivo o acceder sin autorización a cuentas, viajes o sistemas. Podemos limitar el acceso cuando sea necesario para proteger el servicio o a sus usuarios, respetando la normativa aplicable.</p>,
      },
      {
        titulo: '5. Disponibilidad y responsabilidad',
        contenido: <p>Travel Us es una herramienta de planificación; no reserva ni presta servicios de transporte, alojamiento, seguros o actividades turísticas. Debes comprobar directamente con los proveedores cualquier reserva, horario, precio o requisito del viaje. El servicio puede cambiar o interrumpirse por mantenimiento o incidencias; estas condiciones no limitan los derechos que la ley reconoce a las personas consumidoras.</p>,
      },
      {
        titulo: '6. Contenido y derechos de terceros',
        contenido: <p>Conservas los derechos sobre el contenido que aportas. Al compartirlo en un viaje, autorizas su almacenamiento y visualización por las personas integrantes para el funcionamiento de ese viaje. No subas material de terceros sin autorización.</p>,
      },
      {
        titulo: '7. Cuenta y cambios',
        contenido: <p>Puedes solicitar la baja de tu cuenta desde el perfil. El contenido compartido del viaje y los archivos asociados pueden requerir una gestión adicional; consulta la <Link to="/privacidad">Política de privacidad</Link> y contacta con la responsable si necesitas ejercer tus derechos. Podemos actualizar estas condiciones y mostraremos aquí la fecha de la última revisión.</p>,
      },
    ],
  },
  privacidad: {
    titulo: 'Política de privacidad',
    intro: 'Esta página explica qué datos utiliza Travel Us, para qué los necesita y cómo puedes ejercer tus derechos.',
    secciones: [
      {
        titulo: '1. Responsable del tratamiento',
        contenido: <>
          <p>Responsable: Priscila Nunes, gestora de Travel Us. Puedes contactar mediante el <a href="/#contacto">formulario de contacto</a>.</p>
          {/* TODO: Confirmar la identidad legal completa, el domicilio y un medio de contacto directo de la responsable. */}
        </>,
      },
      {
        titulo: '2. Datos que tratamos',
        contenido: <ul>
          <li>Cuenta: email y datos técnicos necesarios para iniciar sesión.</li>
          <li>Perfil: nombre, teléfono, fecha de nacimiento, ubicación, foto y preferencias que decidas facilitar.</li>
          <li>Viajes compartidos: título, destino, fechas, integrantes, itinerarios, puntos de interés y votos, mensajes, enlaces, listas, notas, documentos, imágenes, gastos y comprobantes.</li>
          <li>Contacto: nombre, email y mensaje que envíes mediante el formulario.</li>
          <li>Datos de otras personas que incluyas, por ejemplo el email de un integrante; debes tener derecho a facilitarlos y avisarles de que los has compartido.</li>
        </ul>,
      },
      {
        titulo: '3. Datos de salud o especialmente sensibles',
        contenido: <p>El perfil incluye una opción sobre discapacidad que puede revelar datos relativos a la salud. Esta función requiere una revisión específica y una base jurídica adecuada antes de tratar esos datos. No la utilices para información sensible hasta que Travel Us facilite la información y las garantías necesarias.</p>,
      },
      {
        titulo: '4. Finalidades y bases del tratamiento',
        contenido: <ul>
          <li>Crear y proteger cuentas, autenticar usuarios y prestar las funciones de planificación y colaboración: ejecución del servicio solicitado.</li>
          <li>Guardar los datos que añades a un viaje y mostrarlos a sus integrantes: prestación de la función colaborativa solicitada.</li>
          <li>Responder consultas enviadas por el formulario: atender tu solicitud.</li>
          <li>Prevenir abusos, mantener la seguridad y resolver incidencias: intereses legítimos, cuando correspondan y tras valorar tus derechos.</li>
        </ul>,
      },
      {
        titulo: '5. Quién puede recibir los datos',
        contenido: <>
          <p>Los datos pueden ser tratados por proveedores necesarios para operar la aplicación: Supabase (autenticación, base de datos y archivos), Render (servidor/API), Vercel (alojamiento web) y EmailJS junto con el proveedor de correo conectado para recibir mensajes del formulario. Las personas que participan en un viaje pueden ver el contenido compartido en ese viaje.</p>
         {/* TODO: Confirmar las ubicaciones de tratamiento, los acuerdos y las garantías de transferencia internacional aplicables a cada proveedor. */}
        </>,
      },
      {
        titulo: '6. Conservación y eliminación',
        contenido: <>
          <p>Los datos se conservan mientras la cuenta y los viajes estén activos, y durante el tiempo adicional que exijan las obligaciones legales o la resolución de reclamaciones. Puedes solicitar la eliminación de tu cuenta y ejercer tus derechos mediante el contacto indicado arriba.</p>
         {/* TODO: Verificar qué datos se eliminan al dar de baja la cuenta y durante cuánto tiempo se conserva el contenido compartido. */}
        </>,
      },
      {
        titulo: '7. Tus derechos',
        contenido: <p>Puedes solicitar acceso, rectificación, supresión, limitación, oposición y portabilidad cuando procedan, así como retirar un consentimiento. Para hacerlo, utiliza el formulario de contacto e indica qué derecho quieres ejercer. También puedes reclamar ante la <a href="https://www.aepd.es/" target="_blank" rel="noreferrer">Agencia Española de Protección de Datos (AEPD)</a>. La aplicación no toma decisiones automatizadas con efectos jurídicos sobre ti.</p>,
      },
      {
        titulo: '8. Almacenamiento local y seguridad',
        contenido: <p>La sesión de acceso se conserva en el almacenamiento local del navegador para mantenerte conectado. Travel Us aplica controles técnicos y de acceso propios de la aplicación; ningún servicio conectado a internet puede garantizar seguridad absoluta. Si detectas un acceso no autorizado, contacta con la responsable.</p>,
      },
      {
        titulo: '9. Cambios en esta política',
        contenido: <p>Actualizaremos esta página cuando cambien las funciones o el tratamiento de datos. Revisa la fecha de actualización que aparece al inicio.</p>,
      },
    ],
  },
}

function LegalPage({ tipo }) {
  const pagina = paginas[tipo]

  return (
    <div className={styles.pagina}>
      <header className={styles.header}>
        <Link className={styles.logo} to="/">
          <img src="/travelus-globe.png" alt="" width="32" height="32" />
          <span>Travel Us</span>
        </Link>
        <Link className={styles.volver} to="/">Volver al inicio</Link>
      </header>

      <main className={styles.contenido}>
        <article className={styles.documento}>
          <p className={styles.etiqueta}>TRAVEL US</p>
          <h1>{pagina.titulo}</h1>
          <p className={styles.intro}>{pagina.intro}</p>
          <p className={styles.fecha}>Última actualización: 30 de octubre de 2026</p>
          {pagina.secciones.map(seccion => (
            <section className={styles.seccion} key={seccion.titulo}>
              <h2>{seccion.titulo}</h2>
              {seccion.contenido}
            </section>
          ))}
          <Link className={styles.enlaceContacto} to="/#contacto">¿Tienes alguna consulta? Contáctanos</Link>
        </article>
      </main>

      <footer className={styles.footer}>
        <span>© 2026 Priscila Nunes · Travel Us</span>
        <nav aria-label="Documentos legales">
          <Link to="/condiciones-de-uso">Condiciones de uso</Link>
          <Link to="/privacidad">Privacidad</Link>
        </nav>
      </footer>
    </div>
  )
}

export default LegalPage
