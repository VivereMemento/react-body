import React from 'react';

const Page = ({ children }) => (
	<div className="wrapper">
		{children}
	</div>
);

const Section = ({ children, name }) => (
	<section className={ name }>{ children }</section>
)
const Container = ({ children }) => (
  <div className="container">{children}</div>
);

const Header = ({ children }) => (
  <header className="header">{children}</header>
);

const Main = ({ children }) => (
  <main className="main">{children}</main>
);

const Footer = ({ children }) => (
  <footer className="footer">{children}</footer>
);

const PageLayout = ({ header, main, footer }) => (
	<Page>
		{ header && <Header>{header}</Header> }
		{ main && <Main>{main}</Main> }
		{ footer && <Footer>{footer}</Footer> }
	</Page>
);
PageLayout.Page = Page;
PageLayout.Section = Section;
PageLayout.Container = Container;
PageLayout.Header = Header;
PageLayout.Main = Main;
PageLayout.Footer = Footer;

export default PageLayout;