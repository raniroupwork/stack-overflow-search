// Modules
import React, { useEffect } from 'react';
import moment from 'moment';
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



const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const QuestionsItem = (props) => {
    const {
      data
    } = props
    const classes = useStyles();

    return (
      <div className="QuestionsItem">
        <TableContainer component={Paper} elevation={2} className="QuestionsItem__table">
            <Table className={classes.table} aria-label="customized table">
            <caption className="QuestionsItem__caption">
                <span>{data.title}</span>
                    <IconButton
                    aria-label="Go to question"
                    onClick={(e) => window.open(data.link, "_blank")}
                    edge="end"
                    >
                        <span className={"QuestionsItem__table-link-text"} style={{fontSize:"0.8rem", marginRight: "0.6rem"}}>View on Stack Overflow</span>
                        <OpenInNew/>
                    </IconButton>
            </caption>
            <TableHead>
                <TableRow>
                <StyledTableCell width="20%" align="left">Creation Date</StyledTableCell>
                <StyledTableCell width="20%" align="right">User</StyledTableCell>
                <StyledTableCell width="20%" align="right">View Count</StyledTableCell>
                <StyledTableCell width="20%" align="right">Answer Count</StyledTableCell>
                <StyledTableCell width="20%" align="right">Score</StyledTableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <StyledTableRow>
                    <StyledTableCell width="20%" align="left">{moment.unix(data.creation_date).format("MM/DD/YYYY")}</StyledTableCell>
                    <StyledTableCell width="20%" align="right">{data.owner.display_name}</StyledTableCell>
                    <StyledTableCell width="20%" align="right">{data.view_count}</StyledTableCell>
                    <StyledTableCell width="20%" align="right">{data.answer_count}</StyledTableCell>
                    <StyledTableCell width="20%" align="right">{data.score}</StyledTableCell>
                </StyledTableRow>
            </TableBody>
            </Table>
        </TableContainer>
      </div>
    );
};

export default QuestionsItem;
