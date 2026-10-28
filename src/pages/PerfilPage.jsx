import { useAuth } from '../context/AuthContext'
import { useNavigate } from 'react-router-dom'
import Perfil from '../components/Perfil'
import styles from './PerfilPage.module.css'

function PerfilPage() {
  const { usuario, cerrarSesion } = useAuth()
  const navigate = useNavigate()

  const handleCerrarSesion = () => {
    cerrarSesion()
    navigate('/')
  }

  return (
    <div className={styles.pagina}>

      <header className={styles.header}>
        <span className={styles.logo}><img src="/travelus-globe.png" alt="" width="32" height="32" /><span className={styles.brandText}>Travel Us</span></span>
        <div className={styles.headerDerecha}>
          <button className={styles.btnVolver} onClick={() => navigate('/dashboard')}>
            ← Volver
          </button>
          <button className={styles.btnCerrarSesion} onClick={handleCerrarSesion}>
            Cerrar sesión
          </button>
        </div>
      </header>

      <main className={styles.contenido}>
        <Perfil usuario={usuario} />
      </main>

      <footer className={styles.footer}>
        <div className={styles.footerContenido}>
          <div className={styles.footerLogo}><img src="/travelus-globe.png" alt="" width="32" height="32" /><span className={styles.brandText}>Travel Us</span></div>
          <div className={styles.footerLinks}>
            <span className={styles.footerLink}>Sobre nosotros</span>
            <span className={styles.footerLink}>Contacto</span>
            <span className={styles.footerLink}>Condiciones de uso</span>
            <span className={styles.footerLink}>Privacidad</span>
          </div>
          <p className={styles.footerCopy}>© 2026 Priscila Nunes. Todos los derechos reservados.</p>
        </div>
      </footer>

    </div>
  )
}

export default PerfilPage