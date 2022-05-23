import './Logo.css';

type LogoProps = {
    src: string;
    alt?: string;
}

export const Logo: React.FC<LogoProps> = (props) => {
    return (
        <div className="Logo">
            <img src={props.src} alt={props.alt} />
        </div>
    );
}