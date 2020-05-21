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

import {
  EuiButton,
  EuiButtonEmpty,
  EuiFieldText,
  EuiForm,
  EuiFormRow,
  EuiModal,
  EuiModalBody,
  EuiModalFooter,
  EuiModalHeader,
  EuiModalHeaderTitle,
  EuiOverlayMask,
  EuiRange,
  EuiSwitch,
  EuiCodeBlock,
  EuiSpacer,
} from "@elastic/eui";

export default function Modalq() {
  const params = useView({
    initialCode: "<Button>Hello</Button>",
    scope: {
      EuiButton,
      EuiButtonEmpty,
      EuiFieldText,
      EuiForm,
      EuiFormRow,
      EuiModal,
      EuiModalBody,
      EuiModalFooter,
      EuiModalHeader,
      EuiModalHeaderTitle,
      EuiOverlayMask,
      EuiRange,
      EuiSwitch,
      EuiCodeBlock,
      EuiSpacer,
    },
    onUpdate: console.log,
    imports: {
      "@elastic/eui": {
        named: ["EuiModal"],
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
