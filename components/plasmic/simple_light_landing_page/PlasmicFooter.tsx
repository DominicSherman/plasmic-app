// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: c2SjLp6892vXwRCy1RsP3K
// Component: 3HZysQBVJ98OW
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import IconLink from "../../IconLink"; // plasmic-import: ZhomkEENPJxEv/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: dcMZoNjGlEcKKd/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: c2SjLp6892vXwRCy1RsP3K/projectcss
import * as sty from "./PlasmicFooter.module.css"; // plasmic-import: 3HZysQBVJ98OW/css

import LogoIcon from "./icons/PlasmicIcon__Logo"; // plasmic-import: oh9CrpmJEj58jv/icon
import TwitterIconIcon from "./icons/PlasmicIcon__TwitterIcon"; // plasmic-import: ov3bPSnznTr6Ja/icon
import GithubIconIcon from "./icons/PlasmicIcon__GithubIcon"; // plasmic-import: 5NDQqlXJ1x_RXN/icon
import FacebookIconIcon from "./icons/PlasmicIcon__FacebookIcon"; // plasmic-import: cS-Yd-SPeT8Vjr/icon

export type PlasmicFooter__VariantMembers = {};

export type PlasmicFooter__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooter__VariantsArgs;
export const PlasmicFooter__VariantProps = new Array<VariantPropType>();

export type PlasmicFooter__ArgsType = {};
type ArgPropType = keyof PlasmicFooter__ArgsType;
export const PlasmicFooter__ArgProps = new Array<ArgPropType>();

export type PlasmicFooter__OverridesType = {
  root?: p.Flex<"div">;
  textbox?: p.Flex<"input">;
  button?: p.Flex<"button">;
};

export interface DefaultFooterProps {
  className?: string;
}

function PlasmicFooter__RenderFunc(props: {
  variants: PlasmicFooter__VariantsArgs;
  args: PlasmicFooter__ArgsType;
  overrides: PlasmicFooter__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <p.Stack
      as={"div"}
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      hasGap={true}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.box__fF1Yw)} />

      <p.Stack
        as={"div"}
        hasGap={true}
        className={classNames(defaultcss.all, sty.box___1BfjQ)}
      >
        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__xnu4L)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__e4NYy)}
            icon={
              <LogoIcon
                className={classNames(defaultcss.all, sty.svg__borc8)}
                role={"img"}
              />
            }
          />

          <div className={classNames(defaultcss.all, sty.box__aLva6)}>
            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__g4K7T
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Terms"}
            </p.PlasmicLink>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__znfXa
              )}
            >
              {" · "}
            </div>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__ksTFd
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Privacy"}
            </p.PlasmicLink>
          </div>
        </p.Stack>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box___3D2Pk)}
        >
          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__kz05N)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__ozQmY
              )}
            >
              {"Products"}
            </div>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__vx2IF
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Web Studio"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___156Rc
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"DynamicBox Flex"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___90Qd0
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Programming Forms"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__kskBi
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Integrations"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__eIkE
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Command-line"}
            </p.PlasmicLink>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__oIit)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__ssqNd
              )}
            >
              {"Resources"}
            </div>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__ltytP
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Documentation"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__eaWRu
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Tutorials & Guides"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___2Ivk
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Blog"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__aqZu5
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Support Center"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__qJnE
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Partners"}
            </p.PlasmicLink>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__rYyJg)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__gtHog
              )}
            >
              {"Company"}
            </div>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__qxOiz
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Home"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__ebb6C
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"About us"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__nuIkK
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Company values"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link__b5QfY
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Pricing"}
            </p.PlasmicLink>

            <p.PlasmicLink
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.link___0RWui
              )}
              component={Link}
              href={"#" as const}
              platform={"nextjs"}
            >
              {"Privacy policy"}
            </p.PlasmicLink>
          </p.Stack>

          <p.Stack
            as={"div"}
            hasGap={true}
            className={classNames(defaultcss.all, sty.box__yw9Qr)}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__xiaMg
              )}
            >
              {"Subscribe"}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__jLv4H
              )}
            >
              {"Get the latest news and articles to your inbox every month."}
            </div>

            <div className={classNames(defaultcss.all, sty.box__gQmVx)}>
              <input
                data-plasmic-name={"textbox"}
                data-plasmic-override={overrides.textbox}
                className={classNames(defaultcss.input, sty.textbox)}
                placeholder={"Your email" as const}
                size={1 as const}
                type={"text" as const}
              />

              <button
                data-plasmic-name={"button"}
                data-plasmic-override={overrides.button}
                className={classNames(
                  defaultcss.button,
                  defaultcss.__wab_text,
                  sty.button
                )}
              >
                {">"}
              </button>
            </div>
          </p.Stack>
        </p.Stack>
      </p.Stack>

      <div className={classNames(defaultcss.all, sty.box__yoiDq)} />

      <p.Stack
        as={"div"}
        hasGap={hasVariant(globalVariants, "screen", "mobile") ? true : false}
        className={classNames(defaultcss.all, sty.box__xvhfe)}
      >
        <div className={classNames(defaultcss.all, sty.box__pInhE)}>
          <p.PlasmicLink
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.link__dtQmO
            )}
            component={Link}
            href={"https://cruip.com/" as const}
            platform={"nextjs"}
          >
            {"Designed by Cruip. "}
          </p.PlasmicLink>

          <p.PlasmicLink
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.link__ndf6J
            )}
            component={Link}
            href={"https://www.plasmic.app/" as const}
            platform={"nextjs"}
          >
            {"Built in Plasmic. "}
          </p.PlasmicLink>

          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__t1Zqi
            )}
          >
            {"All rights reserved."}
          </div>
        </div>

        <p.Stack
          as={"div"}
          hasGap={true}
          className={classNames(defaultcss.all, sty.box__moVDc)}
        >
          <IconLink
            className={classNames("__wab_instance", sty.iconLink__ezdnL)}
            icon={
              <TwitterIconIcon
                className={classNames(defaultcss.all, sty.svg__aWuyk)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__hFsVm)}
            icon={
              <GithubIconIcon
                className={classNames(defaultcss.all, sty.svg__dk11H)}
                role={"img"}
              />
            }
          />

          <IconLink
            className={classNames("__wab_instance", sty.iconLink__llz9A)}
            icon={
              <FacebookIconIcon
                className={classNames(defaultcss.all, sty.svg__sQaj2)}
                role={"img"}
              />
            }
          />
        </p.Stack>
      </p.Stack>
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "textbox", "button"],
  textbox: ["textbox"],
  button: ["button"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  textbox: "input";
  button: "button";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooter__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicFooter__VariantsArgs;
  args?: PlasmicFooter__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicFooter__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicFooter__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicFooter__ArgProps,
      internalVariantPropNames: PlasmicFooter__VariantProps
    });

    return PlasmicFooter__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooter";
  } else {
    func.displayName = `PlasmicFooter.${nodeName}`;
  }
  return func;
}

export const PlasmicFooter = Object.assign(
  // Top-level PlasmicFooter renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    textbox: makeNodeComponent("textbox"),
    button: makeNodeComponent("button"),

    // Metadata about props expected for PlasmicFooter
    internalVariantProps: PlasmicFooter__VariantProps,
    internalArgProps: PlasmicFooter__ArgProps
  }
);

export default PlasmicFooter;
/* prettier-ignore-end */