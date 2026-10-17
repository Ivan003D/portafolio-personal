import { Typography } from 'antd'

const { Text, Title } = Typography

const EducationItem = ({ institution, degree, year }) => (
    <div>
        <Title level={4} style={{ margin: 0 }}>
            {degree}
        </Title>
        <Text strong>{institution}</Text>
        {year && (
            <>
                <br />
                <Text type="secondary">{year}</Text>
            </>
        )}
    </div>
)

export default EducationItem
