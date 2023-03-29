import { useEffect, useState } from "react";

export default function GetSelection() {
  const [selectedNode, setSelectedNode] = useState<HTMLElement>();

  const selectText = (
    element: HTMLElement,
    startIndex: number,
    endIndex: number
  ) => {
    if (element && element.firstChild) {
      const selection = window.getSelection();
      const range = document.createRange();
      range.setStart(element.firstChild, startIndex);
      range.setEnd(element.firstChild, endIndex);

      selection?.removeAllRanges();
      selection?.addRange(range);
    }
  };

  const scrollToSelectedText = () => {
    // 사용 안함
    const selection = window.getSelection();
    if (selection && selection.anchorNode) {
      const selectedElement = selection.anchorNode.parentElement;
      selectedElement?.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const myElement = document.getElementById("my-element") as HTMLElement;
    selectText(myElement, 0, 3);
    setSelectedNode(myElement);
  }, []);

  useEffect(() => {
    // document.addEventListener("select", scrollToSelectedText); 사용 안함 : 선택할 때 이벤트가 발생해야 하지만, 이 경우는 이미 선택됨
    selectedNode?.scrollIntoView();
  }, [selectedNode]);

  return (
    <>
      <div>div</div>

      <p>p</p>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>

      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>

      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>

      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>

      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>

      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>

      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>

      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>

      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <div>div</div>
      <span id="my-element" className="test">
        span
      </span>
      <div>div</div>
    </>
  );
}
