<?php require "header.php"; ?>
<div class="container">
	<div class="inner">

			<h1>Rock Your World</h1>
			<p class="small">(aka Not your YouTube playlist)</p>

	</div>
</div>

<div class="list-container js-list-container"></div>
<div class="item-container js-item-container"></div>

<script id="video_list_item" type="text/x-handlebars-template">
	{{#each items}}
	<div class="video-container">
		<div class="video-content">
			<a href="#0" data-id="{{snippet.resourceId.videoId}}">
				<h2>{{snippet.title}}</h2>
			</a>
			<h4>Published on {{formatDate snippet.publishedAt}}</h4>
			<p>{{truncate snippet.description 160}}</p>
		</div>

		<div class="video-thumbnail">
			<a href="#0" data-id="{{snippet.resourceId.videoId}}">
				<img src="{{snippet.thumbnails.medium.url}}" srcset="{{snippet.thumbnails.standard.url}} 768w, {{snippet.thumbnails.high.url}} 481w" sizes="(min-width: 481px) 768px, 100vw" alt="{{snippet.title}}">
			</a>
		</div>
	</div>
	{{/each}}
</script>

<?php require "footer.php"; ?>
