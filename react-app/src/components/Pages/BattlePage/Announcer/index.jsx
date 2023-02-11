import styles from "./styles.module.css";
import { useTypedMessage } from "../../../Hooks/useTypedMessage";

//Component that displays the message to the user
const Announcer = ({ message }) => {
	//useTypedMessage is a hook that delays the output of each letter from the message
	const typedMessage = useTypedMessage(message);

	return (
		<div className={styles.main}>
			<div className={styles.message}>{typedMessage}</div>
		</div>
	);
};

export default Announcer;
