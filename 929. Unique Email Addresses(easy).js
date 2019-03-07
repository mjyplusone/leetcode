/**
 * @param {string[]} emails
 * @return {number}
 */
var numUniqueEmails = function(emails) {
    for (let i = 0; i < emails.length; i++) {
        emails[i] = emails[i].replace(/\+\S*@/, '@');
        let strs = emails[i].split('@');
        emails[i] = strs[0].replace(/\./g, '') + '@' + strs[1];
    }
    return Array.from(new Set(emails)).length;
};