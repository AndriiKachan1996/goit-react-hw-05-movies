import { HeaderContainer, HeaderItem, HeaderList, Nav } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderList>
        <Nav to="/" end>
          <HeaderItem>Home</HeaderItem>
        </Nav>
        <Nav to="/movies">
          <HeaderItem>Movies</HeaderItem>
        </Nav>
      </HeaderList>
    </HeaderContainer>
  );
};

export default Header;
