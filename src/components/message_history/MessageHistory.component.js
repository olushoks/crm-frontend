import PropTypes from "prop-types";
import "./message_history.style.css";

export const MessageHistory = ({ msg }) => {
  if (!msg) return null;

  return msg.map((message, index) => (
    <div key={index} className="message-history mt-3">
      <div className="send font-weight-bold text-secondary">
        <div className="sender">{message.messageBy}</div>
        <div className="date">{message.date}</div>
      </div>
      <div className="message">{message.message}</div>
    </div>
  ));
};

MessageHistory.propTypes = {
  msg: PropTypes.array.isRequired,
};
