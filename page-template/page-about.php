<?php
/**
 * Template Name: About
 *
 * @package WordPress
 * @subpackage Flinked
 */

$folder = 'about';
$path = 'template/'. $folder .'/'.$folder.'-';

if ( have_posts() ){
  while ( have_posts() ) {
    the_post();
    get_header();
    ?>
    <div id="barba-wrapper">
      <div class="barba-container">
        <div class="page--content">
          <main class="about">
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
