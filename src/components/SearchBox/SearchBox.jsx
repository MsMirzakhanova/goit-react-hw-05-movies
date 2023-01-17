import { Form, Input, Icon } from "./SearchBox.styled";

export const SearchBox = ({ value, onChange}) => {
  return (
    <Form >
      <Icon />
      <Input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </Form>
  );
};