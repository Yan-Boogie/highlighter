import React, { useState } from 'react';
import { cx, css } from 'emotion';
import Head from 'next/head';
import dynamic from 'next/dynamic';
import ErrorBoundary from 'react-error-boundary';

import Highlighter from '../../examples/highlighter';

// node
import { getAllExamples } from '../api';

const EXAMPLES = [['Highlighter', Highlighter, 'highlighter']];

const Header = (props) => (
  <div
    {...props}
    className={css`
      align-items: center;
      background: #000;
      color: #aaa;
      display: flex;
      height: 42px;
      position: relative;
      z-index: 1; /* To appear above the underlay */
    `}
  />
);

const Title = (props) => (
  <span
    {...props}
    className={css`
      margin-left: 1em;
    `}
  />
);

const Wrapper = ({ className, ...props }) => (
  <div
    {...props}
    className={cx(
      className,
      css`
        max-width: 42em;
        margin: 20px auto;
        padding: 20px;
      `,
    )}
  />
);

const ExampleContent = (props) => (
  <Wrapper
    {...props}
    className={css`
      background: #fff;
    `}
  />
);

const Warning = (props) => (
  <Wrapper
    {...props}
    className={css`
      background: #fffae0;

      & > pre {
        background: #fbf1bd;
        white-space: pre;
        overflow-x: scroll;
        margin-bottom: 0;
      }
    `}
  />
);

const ExamplePage = ({ example }: { example: string }) => {
  const [error, setError] = useState<Error | undefined>();
  const [stacktrace, setStacktrace] = useState<string | undefined>();
  const EXAMPLE = EXAMPLES.find((e) => e[2] === example);
  const [, Component] = EXAMPLE;

  return (
    <ErrorBoundary
      onError={(err, stackTrace) => {
        setError(err);
        setStacktrace(stackTrace);
      }}
    >
      <div>
        <Head>
          <title>React-Highlighter Example</title>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/favicon.ico" />
          <link rel="stylesheet" href="/index.css" />
          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css?family=Roboto:400,400i,700,700i&subset=latin-ext"
          />
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <Header>
          <Title>React-Highlighter Example</Title>
        </Header>
        {error ? (
          <Warning>
            <p>An error was thrown by one of the example&apos;s React components!</p>
            <pre>
              <code>
                {error.stack}
                {'\n'}
                {stacktrace}
              </code>
            </pre>
          </Warning>
        ) : (
          <ExampleContent>
            <Component />
          </ExampleContent>
        )}
      </div>
    </ErrorBoundary>
  );
};

// Disable SSR because it results in a double rendering which makes debugging
// examples more challenging. No idea how any of this works.
const NoSsrExamplePage = dynamic(() => Promise.resolve(ExamplePage), {
  ssr: false,
});

export async function getStaticPaths() {
  const paths = getAllExamples();

  return {
    paths: paths.map((path) => ({
      params: {
        example: path,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }: { params: { example: string } }) {
  return {
    props: {
      example: params.example,
    },
  };
}

export default NoSsrExamplePage;
