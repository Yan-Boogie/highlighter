import { useState } from 'react';
import { css } from '@emotion/css';
import Head from 'next/head';
import Slate from '../components/slate';
import ModuleMenu from '../components/moduleMenu';

const Header = (props) => (
  <div
    {...props}
    className={css`
      align-items: end;
      display: flex;
      color: #888;
      max-width: 42em;
      margin: 24px auto;
    `}
  />
);

const Title = (props) => (
  <span
    {...props}
    className={css`
      font-size: 42px;
    `}
  />
);

const LinkList = (props) => (
  <div
    {...props}
    className={css`
      margin: 0 1em 6px auto;
    `}
  />
);

const A = (props) => (
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  <a
    {...props}
    className={css`
      margin-left: 1em;
      color: #888;
      text-decoration: none;

      &:hover {
        color: #aaa;
        text-decoration: underline;
      }
    `}
  />
);

const Home = () => {
  const [installedModules, setModules] = useState<string[]>([]);

  console.log('installedModules-->\n', installedModules);

  return (
    <div>
      <Head>
        <title>Highlighter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Header>
        <Title>Highlighter</Title>
        <LinkList>
          <A href="https://github.com/Yan-Boogie/highlighter">Github</A>
        </LinkList>
      </Header>
      <Slate installedModules={installedModules} />
      <ModuleMenu installedModules={installedModules} setModules={setModules} />
    </div>
  );
};

export default Home;
