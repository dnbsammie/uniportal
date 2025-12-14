import styles from '../styles/components/Construction.module.css'

interface UnderConstructionProps {
    title?: string;
    message?: string;
    actionLabel?: string;
    onAction?: () => void;
    icon?: string;
}

export default function UnderConstruction({
    title = "Sección en desarrollo",
    message = "Estamos trabajando en esta funcionalidad.",
    actionLabel,
    onAction,
    icon = "fa-solid fa-person-digging",
    }: UnderConstructionProps)  {
    return (
        <div role="status" aria-live="polite" className={styles.uc}>
            <i className={icon} aria-hidden="true" />
            <h2>{title}</h2>
            <p>{message}</p>
            {actionLabel && onAction && (
                <button onClick={onAction}>
                    {actionLabel}
                </button>
            )}
        </div>
    );
}
