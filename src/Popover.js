import React from "react";

import {
  useView,
  Compiler,
  Knobs,
  Editor,
  Error,
  ActionButtons,
  Placeholder,
  PropTypes,
} from "react-view";

import { EuiPopover, EuiButton } from "@elastic/eui";

export default function Popover() {
  const props = {
    isOpen: {
      type: PropTypes.Boolean,
      value: false,
      stateful: true,
    },
    button: {
      type: PropTypes.ReactNode,
      value: `<EuiButton
        iconType="arrowDown"
        iconSide="right"
        onClick={() => setIsOpen(!isOpen)}
      >
        Show popover
      </EuiButton>`,
    },
    children: {
      type: PropTypes.ReactNode,
      value: `<div style={{ width: "300px" }}>
      Popover content that’s wider than the default
      width
    </div>`,
    },
  };

  const params = useView({
    componentName: "EuiPopover",
    props: props,
    scope: {
      EuiButton,
      EuiPopover,
    },
    imports: {
      "@elastic/eui": {
        named: ["EuiButton", "EuiPopover"],
      },
    },
  });
  return (
    <React.Fragment>
      <Compiler
        {...params.compilerProps}
        minHeight={62}
        placeholder={Placeholder}
      />
      <Error msg={params.errorProps.msg} isPopup />
      <Knobs {...params.knobProps} />
      <Editor {...params.editorProps} />
      <Error {...params.errorProps} />
      <ActionButtons {...params.actions} />
    </React.Fragment>
  );
}
