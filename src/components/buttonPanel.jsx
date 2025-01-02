import { buttons } from "../data/buttonData";
import Button from "./button";

const ButtonPanel = () => {
  return (
    <div className="button-panel">
      {buttons.map((row, rowIndex) => {
        // Check if the row contains sub-rows
        if (Array.isArray(row[0])) {
          return (
            <div key={rowIndex} className="panel-row">
              <div className={"inner-row75"}>
                {row[0].map((subRow, subRowIndex) => (
                  <div className="sub-row" key={subRowIndex}>
                    {subRow.map((innerRow, innerRowIndex) => (
                      <Button
                        key={innerRowIndex}
                        label={innerRow.label}
                      ></Button>
                    ))}
                  </div>
                ))}
              </div>
              <div className={"inner-row25"}>
                <Button label={row[1][0].label}></Button>
              </div>
            </div>
          );
        }

        // Regular rows
        return (
          <div key={rowIndex} className="panel-row">
            {row.map((button, buttonIndex) => (
              <Button
                key={buttonIndex}
                label={button.label}
                type={button.type}
              />
            ))}
          </div>
        );
      })}
    </div>
  );
};

export default ButtonPanel;
