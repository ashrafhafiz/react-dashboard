import React from "react";
import { ColorPickerComponent } from "@syncfusion/ej2-react-inputs";
import {
  AccordionComponent,
  AccordionItemDirective,
  AccordionItemsDirective,
} from "@syncfusion/ej2-react-navigations";
import { ListViewComponent } from "@syncfusion/ej2-react-lists";

import { Header } from "../components";

const changeColor = (args) => {
  document.getElementById("preview").style.backgroundColor =
    args.currentValue.hex;
};

const content0 = () => {
  return (
    <div>
      Microsoft ASP.NET is a set of technologies in the Microsoft .NET Framework
      for building Web applications and XML Web services.
    </div>
  );
};
const content1 = () => {
  return (
    <div>
      The Model-View-Controller (MVC) architectural pattern separates an
      application into three main components: the model, the view, and the
      controller.
    </div>
  );
};
const content2 = () => {
  return (
    <div>
      JavaScript (JS) is an interpreted computer programming language.It was
      originally implemented as part of web browsers so that client-side scripts
      could interact with the user, control the browser, communicate
      asynchronously, and alter the document content that was displayed.
    </div>
  );
};
const ColorPicker = () => {
  const data = ["فنون", "ملخصات", "رسومات", "سيراميك", "كرتون", "لوحات"];

  return (
    <div className="m-10 p-10 bg-white rounded-3xl">
      <Header title="Color Picker" category="Application" />
      <div className="text-center">
        <div id="preview" />
        <div className="flex justify-center items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
            <ColorPickerComponent
              id="inline-pallete"
              mode="Palette"
              modeSwitcher={false}
              inline={true}
              showButtons={false}
              change={changeColor}
            ></ColorPickerComponent>
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent
              id="inline-picker"
              mode="Picker"
              modeSwitcher={false}
              inline={true}
              showButtons={false}
              change={changeColor}
            ></ColorPickerComponent>
          </div>
        </div>
      </div>
      <div className="m-10 p-10">
        <AccordionComponent>
          <AccordionItemsDirective>
            <AccordionItemDirective
              expanded="true"
              header="ASP.NET"
              content={content0}
            />
            <AccordionItemDirective header="ASP.NET MVC" content={content1} />
            <AccordionItemDirective header="JavaScript" content={content2} />
          </AccordionItemsDirective>
        </AccordionComponent>
      </div>
      <div className="flex justify-center items-center m-10 p-10">
        <div className="w-72">
          <ListViewComponent
            id="list"
            dataSource={data}
            showHeader="true"
            headerTitle="أنواع الفنون المتاحة RTL"
            enableRtl="true"
          ></ListViewComponent>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
