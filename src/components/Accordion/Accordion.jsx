import React, { useState } from 'react';
import './Accordion.css';
import data from './data';

const Accordion = () => {
  const [selected, setSelected] = useState(null);
  const [enableMultiChoices, setEnableMultiChoices] = useState(false);
  const [multiple, setMultiple] = useState([]);

  function handleSingleChoices(currentId) {
    setSelected(currentId === selected ? null : currentId);
  }

  function handleMultiChoices(currentId) {
    let saveMultiple = [...multiple];
    const findIndexOfCurrentId = saveMultiple.indexOf(currentId);

    if (findIndexOfCurrentId === -1) saveMultiple.push(currentId);
    else saveMultiple.splice(findIndexOfCurrentId, 1);

    setMultiple(saveMultiple);
  }

  return (
    <div className="wrapper">
      <button onClick={() => setEnableMultiChoices(!enableMultiChoices)}>
        {enableMultiChoices ? '停用多重選擇' : '啟用多重選擇'}
      </button>
      <div className="accordion">
        {data.map((item) => {
          return (
            <div key={item.id} className="item">
              <div
                onClick={
                  enableMultiChoices
                    ? () => handleMultiChoices(item.id)
                    : () => handleSingleChoices(item.id)
                }
                className="accordion-title"
              >
                <h2>{item.question}</h2>
                {/* 多選 */}
                {enableMultiChoices &&
                  (multiple.indexOf(item.id) !== -1 ? (
                    <span>-</span>
                  ) : (
                    <span>+</span>
                  ))}

                {/* 單選 */}
                {!enableMultiChoices && (
                  <span>{item.id === selected ? '-' : '+'}</span>
                )}
              </div>
              {enableMultiChoices
                ? multiple.indexOf(item.id) !== -1 && (
                    <div className="accordion-content">{item.answer}</div>
                  )
                : selected === item.id && (
                    <div className="accordion-content">{item.answer}</div>
                  )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Accordion;
