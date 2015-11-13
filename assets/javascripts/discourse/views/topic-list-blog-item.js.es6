
export default Discourse.View.extend({
  templateName:"topic-list-blog-item",
  classNames: ["curated-item"],
  attributeBindings: ['data-topic-id'],
  'data-topic-id': Em.computed.alias('content.id'),
});