import Heading from "../heading";

export default function SiteHeader({ children }) {
  return (
    <header className='site__header'>
      <Heading as='h1' size='lg' color='light'>
        {children}
      </Heading>
    </header>
  );
}
