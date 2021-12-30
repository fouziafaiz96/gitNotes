import { CustomButton } from "../../../styles/Elements";

interface IProps {
  title: string;
  bgColor: string;
  color: string;
  bordercolor: string;
  handleClick?: () => void;
  icon?: React.ReactElement;
}
export const Button = ({
  title,
  bgColor,
  color,
  bordercolor,
  handleClick,
  icon,
}: IProps) => {
  return (
    <CustomButton
      bg={bgColor}
      color={color}
      bordercolor={bordercolor}
      icon={icon}
      onClick={handleClick}
    >
      {title}
    </CustomButton>
  );
};
