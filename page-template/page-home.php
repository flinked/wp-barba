<?php
/**
 * Template Name: Home
 *
 * @package WordPress
 * @subpackage Flinked
 */

$folder = 'home';
$path = 'template/'. $folder .'/'.$folder.'-';

if ( have_posts() ){
  while ( have_posts() ) {
    the_post();
    get_header();
    ?>
    <div id="barba-wrapper">
      <div class="barba-container">
        <div class="page--content">
          <main class="home">
          <?php
            get_template_part($path . 'main');
          ?>
          </main>
          <?php
            get_footer();
          ?>
        </div>
      </div>
    </div>
  <?php
  }
}
?>
