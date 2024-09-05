import Link from 'next/link';

export default function Navbar () {
  return (
    <nav>

        <Link href="/">Inicio</Link>
        <Link href="/avisos">Avisos</Link>   
        <Link href="/noticias">Noticias</Link>
        <Link href="/nosotros">Nosotros</Link>
        <Link href="/contacto">Contacto</Link>     
    
    </nav>
  );
}