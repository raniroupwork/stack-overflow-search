// Modules
import React, { useEffect } from 'react';
// Styles
import './QuestionItem.sass';

// Components
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

//Icons
import OpenInNew from '@material-ui/icons/OpenInNew';

const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: "#F48024",
    color: theme.palette.common.white,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
  root: {
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.common.white,
    },
  },
}))(TableRow);

function questionInfo(name, date, views, answers, reputation) {
  return { name, date, views, answers, reputation };
}

const rows = [
  questionInfo('22/02/2017','Keaton Benning', 1403, 8, 49),
];

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const QuestionsItem = () => {
    const classes = useStyles();

    return (
      <div className="QuestionsItem">
        <TableContainer component={Paper} elevation={2}>
            <Table className={classes.table} aria-label="customized table">
            <caption className="QuestionsItem__caption">
                <span>Descriçao da pergunta realizada</span>
                    <IconButton
                    aria-label="Go to question"
                    onClick={(e) => alert(e.target.value)}
                    edge="end"
                    >
                        <span style={{fontSize:"0.8rem", marginRight: "0.6rem"}}>View on Stack Overflow</span>
                        <OpenInNew/>
                    </IconButton>
            </caption>
            <TableHead>
                <TableRow>
                <StyledTableCell>Cration Date</StyledTableCell>
                <StyledTableCell align="right">User</StyledTableCell>
                <StyledTableCell align="right">View Count</StyledTableCell>
                <StyledTableCell align="right">Answer Count</StyledTableCell>
                <StyledTableCell align="right">Reputation</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {rows.map((row) => (
                <StyledTableRow key={row.name}>
                    <StyledTableCell component="th" scope="row">
                    {row.name}
                    </StyledTableCell>
                    <StyledTableCell align="right">{row.date}</StyledTableCell>
                    <StyledTableCell align="right">{row.views}</StyledTableCell>
                    <StyledTableCell align="right">{row.answers}</StyledTableCell>
                    <StyledTableCell align="right">{row.reputation}</StyledTableCell>
                </StyledTableRow>
                ))}
            </TableBody>
            </Table>
        </TableContainer>
      </div>
    );
};

export default QuestionsItem;
