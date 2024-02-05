import React from "react";

interface WarningProps extends React.HTMLAttributes<HTMLDivElement> {}

const Warning: React.FC<WarningProps> = ({ children, ...rest }) => (
    <div {...rest} style={{ color: 'red', fontWeight: 'bold' }}>
        {children}
    </div>
);

export default Warning;