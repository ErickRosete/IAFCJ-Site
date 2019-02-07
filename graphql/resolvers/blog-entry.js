const BlogEntry = require("../../models/blog-entry");

module.exports = {
    blog: async () => {
        try {
            const blog = await BlogEntry.find();
            return blog.map(blogEntry => {
                return { ...blogEntry._doc };
            });
        } catch (err) {
            throw err;
        }
    },

    blogEntry: async (args) => {
        try {
            const blogEntry = await BlogEntry.findById(args.id);
            return { ...blogEntry._doc };
        } catch (err) {
            throw err;
        }
    },

    createBlogEntry: async (args) => {
        // if (!req.isAuth) {
        //   throw new Error("Unauthenticated");
        // }
        const blogEntry = BlogEntry({
            ...args.blogEntryInput
        });
        try {
            const result = await blogEntry.save();
            return { ...result._doc };
        } catch (err) {
            throw err;
        }
    },

    updateBlogEntry: async (args) => {
        try {
            const blogEntry = await BlogEntry.findByIdAndUpdate(args.id,
                { ...args.blogEntryInput },
                { new: true });
            return { ...blogEntry._doc };
        } catch (err) {
            throw err;
        }
    },

    deleteBlogEntry: async (args) => {
        try {
            const blogEntry = await BlogEntry.findByIdAndDelete(args.id);
            return { ...blogEntry._doc };
        } catch (err) {
            throw err;
        }
    }
};