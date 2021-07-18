import PropTypes from "prop-types";
import "./message_history.style.css";

/*===================================*
        END OF IMPORTS
*===================================*/

export const MessageHistory = ({ message }) => {
  if (!message) return null;

  return message.map((msg, index) => (
    <div key={index} className="message-history mt-3">
      <div className="send font-weight-bold text-secondary">
        <div className="sender">{msg.sender}</div>
        <div className="date">{msg.sent_date}</div>
      </div>
      <div className="message">{msg.message}</div>
    </div>
  ));
};

MessageHistory.propTypes = {
  message: PropTypes.array.isRequired,
};
