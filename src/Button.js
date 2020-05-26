import React, { useState, useEffect } from "react";

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

// import "brace/theme/github";

import {
  EuiButton,
  EuiRadioGroup,
  EuiCheckboxGroup,
  EuiCodeEditor,
  EuiCheckbox,
  EuiSpacer,
  EuiFieldText,
} from "@elastic/eui";

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
    options: { ghost: "ghost", primary: "primary", text: "text" },
    type: PropTypes.Enum,
  },
  fullWidth: {
    description: "",
    value: false,
    type: PropTypes.Boolean,
  },
};

const Button = () => {
  const params = useView({
    initialCode: "() => { return <EuiButton>Hello</EuiButton>;  }",
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

  console.log("knobProps", params.knobProps);
  const radios = [
    {
      id: `primary`,
      label: "primary",
    },
    {
      id: `text`,
      label: "text",
    },
    {
      id: `ghost`,
      label: "ghost",
    },
  ];

  const [radioIdSelected, setRadioIdSelected] = useState(`primary`);
  const [child, setChild] = useState("Hello");

  const onChange = (optionId) => {
    // console.log(optionId);
    params.knobProps.set(optionId, "color");
    setRadioIdSelected(optionId);
  };

  return (
    <React.Fragment>
      <Compiler
        {...params.compilerProps}
        minHeight={62}
        placeholder={Placeholder}
      />
      <Error msg={params.errorProps.msg} isPopup />
      <EuiCheckbox
        id={"fullwidth"}
        label="fullWidth"
        checked={params.knobProps.state.fullWidth.value}
        onChange={(e) => params.knobProps.set(e.target.checked, "fullWidth")}
      />
      <EuiSpacer />
      <EuiRadioGroup
        options={radios}
        idSelected={radioIdSelected}
        onChange={(id) => onChange(id)}
        name="radio group"
        legend={{
          children: <span>Select color</span>,
        }}
      />
      <EuiSpacer />
      <EuiFieldText
        placeholder="Placeholder text"
        value={child}
        onChange={(e) => {
          setChild(e.target.value);
          params.knobProps.set(e.target.value, "children");
        }}
        aria-label="Use aria labels when no actual label is in use"
      />
      <EuiSpacer />
      {/* <Knobs {...params.knobProps} /> */}
      <EuiCodeEditor
        mode="javascript"
        theme="github"
        width="100%"
        value={params.editorProps.code}
        onChange={params.editorProps.onChange}
        setOptions={{
          fontSize: "14px",
          enableBasicAutocompletion: true,
          enableSnippets: true,
          enableLiveAutocompletion: true,
        }}
        onBlur={() => {
          console.log("blur");
        }} // eslint-disable-line no-console
        aria-label="Code Editor"
      />
      <Error {...params.errorProps} />
      <ActionButtons {...params.actions} />
    </React.Fragment>
  );
};

export default Button;
/*
 <EuiCodeEditor
      mode="javascript"
      theme="github"
      width="100%"
      value={value}
      onChange={onChange}
      setOptions={{
        fontSize: '14px',
        enableBasicAutocompletion: true,
        enableSnippets: true,
        enableLiveAutocompletion: true,
      }}
      onBlur={() => {
        console.log('blur');
      }} // eslint-disable-line no-console
      aria-label="Code Editor"
    />


    */
