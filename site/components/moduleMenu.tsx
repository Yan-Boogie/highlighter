import {
  useState, MouseEventHandler, PropsWithChildren, useEffect, Dispatch, SetStateAction,
} from 'react';
import { css, cx } from '@emotion/css';

const classes = {
  btn: (active: boolean, withBorder: boolean, size = '24px', disabled = false) => css`
    cursor: ${disabled ? 'not-allowed' : 'pointer'};
    color: ${active ? '#2BCC43' : '#888'};
    border: none;
    ${withBorder ? 'border-bottom: 1px solid #888;' : ''}
    font-size: ${size};
    padding: 8px;
    background-color: inherit;

    ${active
    ? ''
    : `
      &:hover {
        color: #AAA;
      }
    `}
  `,
  menu: css`
    position: fixed;
    right: 16%;
    top: 8em;
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 88px;
  `,
};

interface IButton {
  active: boolean;
  onClick: MouseEventHandler<HTMLElement>;
  withBorder?: boolean;
  disabled?: boolean;
  size?: string;
  className?: string;
}

const Button = (props: PropsWithChildren<IButton>) => {
  const {
    active, onClick, withBorder = false, disabled = false, children, size = '24px', className = '',
  } = props;

  return (
    <button
      type="button"
      className={cx(classes.btn(active, withBorder, size, disabled), className)}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export interface IModuleMenu {
  installedModules: string[];
  setModules: Dispatch<SetStateAction<string[]>>;
}

const blockMenuList = ['Divider', 'Heading', 'List', 'Paragraph'] as const;
const activeBlockMenuList = ['Heading', 'List', 'Paragraph'] as const;
const floatMenuList = ['Bold', 'Italic', 'Underline', 'Link'] as const;
const activeFloatMenuList = ['Bold', 'Italic', 'Underline'] as const;

export const modules = [...activeBlockMenuList, ...activeFloatMenuList] as const;
export type ModuleTypes = typeof modules;

const blockMenuBundle = blockMenuList.map((el) => ({ name: el, disabled: el === 'Divider' || el === 'Paragraph' }));
const floatMenuBundle = floatMenuList.map((el) => ({ name: el, disabled: el === 'Link' }));

const ModuleMenu = (props: IModuleMenu) => {
  const { installedModules, setModules } = props;
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setModules([...modules]);
  }, [setModules]);

  return (
    <div className={classes.menu}>
      <Button
        withBorder
        active={open}
        onClick={() => setOpen((prev) => !prev)}
        className={css`
          margin: 0 0 8px 0;
        `}
      >
        Menu
      </Button>
      {open && (
        <>
          {blockMenuBundle.map((item) => (
            <Button
              size="16px"
              key={item.name}
              disabled={item.disabled}
              active={!!~installedModules.indexOf(item.name)}
              onClick={() => setModules((prev) => {
                const idx = prev.indexOf(item.name);

                if (!~idx) return [...prev, item.name];

                return [...prev.slice(0, idx), ...prev.slice(idx + 1)];
              })}
            >
              {item.name}
            </Button>
          ))}
          <div
            className={css`
              width: 100%;
              height: 1px;
              background-color: #888;
              margin: 8px 0;
            `}
          />
          {floatMenuBundle.map((item) => (
            <Button
              size="16px"
              key={item.name}
              disabled={item.disabled}
              active={!!~installedModules.indexOf(item.name)}
              onClick={() => setModules((prev) => {
                const idx = prev.indexOf(item.name);

                if (!~idx) return [...prev, item.name];

                return [...prev.slice(0, idx), ...prev.slice(idx + 1)];
              })}
            >
              {item.name}
            </Button>
          ))}
        </>
      )}
    </div>
  );
};

export default ModuleMenu;
