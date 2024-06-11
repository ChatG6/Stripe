import { nav_urls } from "./configs/urls";
const Header = () => {
  return (
    <header>
      <div>
        <h1>Test</h1>
      </div>
      {nav_urls.map((e, i) => (
        <a key={i} href={e.url}>
          {e.name}
        </a>
      ))}
    </header>
  );
};

export default Header;
