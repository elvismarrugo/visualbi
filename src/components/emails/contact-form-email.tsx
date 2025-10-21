import {
    Body,
    Container,
    Head,
    Heading,
    Hr,
    Html,
    Preview,
    Section,
    Text,
} from '@react-email/components';

interface ContactFormEmailProps {
    name: string;
    email: string;
    details: string;
}

export default function ContactFormEmail({
    name,
    email,
    details,
}: ContactFormEmailProps) {
    return (
        <Html>
            <Head />
            <Preview>Nueva consulta de {name} desde Visual BI</Preview>
            <Body style={main}>
                <Container style={container}>
                    <Section style={box}>
                        <Heading style={heading}>Nueva Consulta de Contacto</Heading>
                        <Hr style={hr} />
                        <Text style={paragraph}>Has recibido un nuevo mensaje desde el formulario de contacto de tu sitio web.</Text>
                        
                        <Text style={paragraph}>
                            <strong>Nombre:</strong> {name}
                        </Text>
                        <Text style={paragraph}>
                            <strong>Email:</strong> <a href={`mailto:${email}`} style={anchor}>{email}</a>
                        </Text>
                        
                        <Hr style={hr} />

                        <Heading as="h2" style={subHeading}>Detalles del Proyecto:</Heading>
                        <Text style={paragraph}>{details}</Text>
                        
                        <Hr style={hr} />
                        <Text style={footer}>
                            Enviado desde el sitio web de Soluciones Visual BI.
                        </Text>
                    </Section>
                </Container>
            </Body>
        </Html>
    );
}

const main = {
    backgroundColor: '#f6f9fc',
    fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Ubuntu,sans-serif',
};

const container = {
    backgroundColor: '#ffffff',
    margin: '0 auto',
    padding: '20px 0 48px',
    marginBottom: '64px',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
};

const box = {
    padding: '0 48px',
};

const heading = {
    fontSize: '28px',
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center' as const,
};

const subHeading = {
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#444',
};

const hr = {
    borderColor: '#e6ebf1',
    margin: '20px 0',
};

const paragraph = {
    color: '#525f7f',
    fontSize: '16px',
    lineHeight: '24px',
    textAlign: 'left' as const,
};

const anchor = {
    color: '#556cd6',
};

const footer = {
    color: '#8898aa',
    fontSize: '12px',
    lineHeight: '16px',
};
