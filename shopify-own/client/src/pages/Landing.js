import main from "../assets/images/main.svg";
import styled from "styled-components";
import { Logo } from "../components";

export const Landing = () => {
  return (
    <Wrapper>
      <div>
        <main>
          <nav>
            <Logo />
          </nav>
        </main>
        <div className="container page">
          <div className="info">
            <h1>
              job <span>tracking</span> app
            </h1>
            <p>askjldfhalksdjfhkalsdhfkashdfsdf</p>
            <button className="btn btn-hero">Login/Register</button>
            <img src={main} alt="job hunt" className="img main-img"></img>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.main`
  nav {
    width: var(--fluid-width);
    max-width: var(--max-width);
    margin: 0 auto;
    height: var(--nav-height);
    display: flex;
    align-items: center;
  }

  page {
    display: grid;
    align-items: center;
    min-height: calc(100vh - var(--nav-height));
    margin-top: -3rem;
  }

  h1 {
    font-weight: 700;
    span {
      color: var(--primary-500);
    }
  }

  p {
    color: var(--grey-600);
  }

  .main-img {
    display: none;
  }

  @media (min-width: 992px) {
    .page {
      grid-template-columns: 1fr 1fr;
      column-gap: 3rem;
    }
    .main-img {
      display: block;
    }
  }
`;
