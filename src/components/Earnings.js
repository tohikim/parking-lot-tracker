function Earnings(props) {
  return (
    <div style={styles.earningsBox}>
      <h5 style={styles.h5}>DAY EARNINGS</h5>
      <p style={styles.p}>Seconds rate: $2</p>
      <div style={styles.totalEarnings}>
        <p style={styles.p}>Today's earnings: $</p>
        <p style={styles.p}>{props.totalEarnings}</p>
      </div>
    </div>
  );
}

const styles = {
  earningsBox: {
    backgroundColor: "white",
    border: "1px dotted #7D99AA",
    borderRadius: "15px",
    width: "75%",
    minHeight: "150px",
    padding: "1rem",
    color: "#7D99AA",
  },

  totalEarnings: {
    display: "flex",
    flexDirection: "row",
    gap: 0,
  },

  h5: {
    margin: 0,
    marginBottom: "1rem",
    fontSize: "1.5rem",
  },
  p: {
    margin: 0,
    color: "black",
    textAlign: "left",
  },
};

export default Earnings;
