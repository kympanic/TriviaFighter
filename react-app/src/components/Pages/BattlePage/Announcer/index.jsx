import styles from "./styles.module.css";
import { useTypedMessage } from "../../../Hooks/useTypedMessage";

const Announcer = ({ message }) => {
	const typedMessage = useTypedMessage(message);

	return (
		<div className={styles.main}>
			<div className={styles.message}>{typedMessage}</div>
		</div>
	);
};

export default Announcer;
