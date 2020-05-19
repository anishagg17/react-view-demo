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

import { EuiButton } from "@elastic/eui";

const testProps = {
  color: {
    defaultValue: {
      computed: false,
      value: "primary",
    },
    description: "`text` color is set for deprecation",
    required: false,
    type: {
      name: "enum",
      value: [
        { value: "ghost", computed: false },
        { value: "text", computed: false },
      ],
    },
  },
  fullWidth: {
    description: "",
    required: false,
    type: { name: "bool" },
  },
};

const modifiedProps = {
  children: {
    value: "Hello",
    type: PropTypes.ReactNode,
    description: "Visible label.",
  },
  color: {
    defaultValue: "primary",
    description: "`text` color is set for deprecation",
    required: false,
    options: { ghost: "ghost", text: "text" },
    type: PropTypes.Enum,
  },
  fullWidth: {
    description: "",
    value: false,
    type: PropTypes.Boolean,
  },
};

const App = () => {
  const params = useView({
    componentName: "EuiButton",
    props: modifiedProps,
    scope: {
      EuiButton,
    },
    imports: {
      "@elastic/eui": {
        named: ["EuiButton"],
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
};

export default App;
