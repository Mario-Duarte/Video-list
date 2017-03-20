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
			<a class="js-open-video" href="#0" data-id="{{snippet.resourceId.videoId}}">
				<h2>{{snippet.title}}</h2>
			</a>
			<h4>Published on {{formatDate snippet.publishedAt}}</h4>
			<p>{{truncate snippet.description 160}}</p>
		</div>

		<div class="video-thumbnail">
			<a class="js-open-video" href="#0" data-id="{{snippet.resourceId.videoId}}">
				<img src="{{snippet.thumbnails.medium.url}}" srcset="{{snippet.thumbnails.standard.url}} 768w, {{snippet.thumbnails.high.url}} 481w" sizes="(min-width: 481px) 768px, 100vw" alt="{{snippet.title}}">
			</a>
		</div>
	</div>
	{{/each}}
	{{#if nextPageToken}}
		<a href="#0" class="btn js-nex-page" data-token="{{nextPageToken}}">Next Page</a>
	{{/if}}
</script>

<script id="single-video-item" type="text/x-handlebars-template">
	{{#each items}}
		<a href="#0" class="js-return-list"><i class="fa fa-angle-left" aria-hidden="true"></i>Back to list of videos</a>
		<h2>{{snippet.title}}</h2>
		<h4>Published on {{formatDate snippet.publishedAt}}</h4>

		<div class="video-item-container">
			<div class="video">
				<iframe width="auto" height="auto" src="https://www.youtube.com/embed/{{id}}" frameborder="0" allowfullscreen style="width:100%;"></iframe>
			</div>
			<div class="video-description">
				<p>{{snippet.description}}</p>
			</div>
		</div>

	{{/each}}
</script>

<?php require "footer.php"; ?>
