import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import useAppStore from "../../stores/store";
import chevronIcon from "../../images/icons/chevron-icon.svg";

const DropdownContainer = styled("div")`
  box-sizing: border-box;
  position: relative;
  padding: 10px 16px;
  width: ${(props) => (!props.isFullWidth ? "auto" : "100%")};
  display: ${(props) => (!props.isFullWidth ? "inline-block" : "block")};
  background: #586165;
  border-radius: 8px;
`;

const InputText = styled("p")`
  box-sizing: border-box;
  position: relative;
  margin: 0px;
  font-family: sans-serif;
  font-weight: normal;
  font-size: 18px;
  line-height: 24px;
  color: #fbfcfb;
`;

const DropdownFlyout = styled("div")`
  box-sizing: border-box;
  position: absolute;
  top: 48px;
  left: 0px;
  right: 0px;
  border: 2px solid rgba(88, 97, 101, 0.3);
  border-radius: 8px;
  overflow: hidden;
  z-index: 1;
`;

const DropdownOptionContainer = styled("div")`
  box-sizing: border-box;
  position: relative;
  background: white;
`;

const DropdownOptionText = styled("p")`
  box-sizing: border-box;
  position: relative;
  margin: 0px;
  padding: 12px 12px;
  font-family: sans-serif;
  font-weight: normal;
  font-size: 18px;
  line-height: 20px;
  color: #586165;
  cursor: pointer;

  &:hover {
    background: rgba(88, 97, 101, 0.1);
  }
`;

const IconContainer = styled.img`
  position: relative;
  box-sizing: border-box;
  width: 24px;
  height: 24px;
  cursor: pointer;
  border-radius: 2px;
  transform: ${(props) =>
    !props.dropdownIsOpen ? "rotate(90deg)" : "rotate(180deg)"};

  &:hover {
    border: 1px solid #fbfcfb;
  }
`;

export default function Dropdown({ options, isFullWidth, ...otherProps }) {
  const [isFlyoutOpen, setIsFlyoutOpen] = React.useState(false);
  const featuredProjectType = useAppStore((state) => state.featuredProjectType);
  const setFeaturedProjectType = useAppStore(
    (state) => state.setFeaturedProjectType
  );
  const dropdownRef = React.useRef(null);

  const handleOptionClick = (e) =>
    setFeaturedProjectType(
      e.target.textContent.toLowerCase() === "development" ? "dev" : "design"
    );

  React.useEffect(() => {
    const closeFlyoutOnEsc = (e) => e.keyCode === 27 && setIsFlyoutOpen(false);
    const closeFlyoutOnClickOutside = () =>
      isFlyoutOpen && setIsFlyoutOpen(false);

    const cleanUp = () => {
      window.removeEventListener("keydown", closeFlyoutOnEsc);
      window.removeEventListener("click", closeFlyoutOnClickOutside);
    };

    window.addEventListener("keydown", closeFlyoutOnEsc);
    window.addEventListener("click", closeFlyoutOnClickOutside);

    return cleanUp;
  });

  return (
    <DropdownContainer
      isFullWidth={isFullWidth}
      onClick={() => setIsFlyoutOpen((prevState) => !prevState)}
      ref={dropdownRef}
      {...otherProps}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          cursor: "pointer",
        }}
      >
        <InputText>
          {featuredProjectType === "dev" ? "Development" : "Design"}
        </InputText>
        <IconContainer
          src={chevronIcon}
          dropdownIsOpen={isFlyoutOpen}
        />
      </div>
      {isFlyoutOpen && (
        <DropdownFlyout isFlyoutOpen={isFlyoutOpen}>
          <DropdownOptionContainer>
            {options.map((option) => (
              <DropdownOptionText onClick={(e) => handleOptionClick(e)}>
                {option.label}
              </DropdownOptionText>
            ))}
          </DropdownOptionContainer>
        </DropdownFlyout>
      )}
    </DropdownContainer>
  );
}

Dropdown.propTypes = {
  options: PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  }).isRequired,
  isFullWidth: PropTypes.bool,
};
