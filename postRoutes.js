router.get('/search', async (req, res) => {
    const { query } = req.query;
    const posts = await Post.find({ title: new RegExp(query, 'i') });
    res.json(posts);
});
