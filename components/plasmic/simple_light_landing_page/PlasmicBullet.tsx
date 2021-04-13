// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: c2SjLp6892vXwRCy1RsP3K
// Component: V8n6RvBvIDP9OQ
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

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_simple_light_landing_page.module.css"; // plasmic-import: c2SjLp6892vXwRCy1RsP3K/projectcss
import * as sty from "./PlasmicBullet.module.css"; // plasmic-import: V8n6RvBvIDP9OQ/css

import Done24Pxsvg2Icon from "./icons/PlasmicIcon__Done24Pxsvg2"; // plasmic-import: SXHTMjD1zL8aA5/icon

export type PlasmicBullet__VariantMembers = {};

export type PlasmicBullet__VariantsArgs = {};
type VariantPropType = keyof PlasmicBullet__VariantsArgs;
export const PlasmicBullet__VariantProps = new Array<VariantPropType>();

export type PlasmicBullet__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicBullet__ArgsType;
export const PlasmicBullet__ArgProps = new Array<ArgPropType>("children");

export type PlasmicBullet__OverridesType = {
  root?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultBulletProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicBullet__RenderFunc(props: {
  variants: PlasmicBullet__VariantsArgs;
  args: PlasmicBullet__ArgsType;
  overrides: PlasmicBullet__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

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
      <Done24Pxsvg2Icon
        data-plasmic-name={"svg"}
        data-plasmic-override={overrides.svg}
        className={classNames(defaultcss.all, sty.svg)}
        role={"img"}
      />

      <p.PlasmicSlot
        defaultContents={"Lorem ipsum dolor velit"}
        value={args.children}
      />
    </p.Stack>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicBullet__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicBullet__VariantsArgs;
  args?: PlasmicBullet__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicBullet__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicBullet__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicBullet__ArgProps,
      internalVariantPropNames: PlasmicBullet__VariantProps
    });

    return PlasmicBullet__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicBullet";
  } else {
    func.displayName = `PlasmicBullet.${nodeName}`;
  }
  return func;
}

export const PlasmicBullet = Object.assign(
  // Top-level PlasmicBullet renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicBullet
    internalVariantProps: PlasmicBullet__VariantProps,
    internalArgProps: PlasmicBullet__ArgProps
  }
);

export default PlasmicBullet;
/* prettier-ignore-end */
