const { dateToString } = require("../../helpers/date");

const transformEvent = event => {
  return {
    ...event._doc,
    endDate: dateToString(event.endDate),
    startDate: dateToString(event.startDate),
    createdAt: dateToString(event.createdAt),
    updatedAt: dateToString(event.updatedAt)
  };
};

const transformUser = user => {
  return {
    ...user._doc,
    password: null
  };
};

const transformBlogEntry = blogEntry => {
  return {
    ...blogEntry._doc,
    createdAt: dateToString(blogEntry.createdAt),
    updatedAt: dateToString(blogEntry.updatedAt)
  };
};

exports.transformEvent = transformEvent;
exports.transformUser = transformUser;
exports.transformBlogEntry = transformBlogEntry;
