# to resize all *.JPG files in current folder and save them to the subfolder ./small :
# in the shell, do:
for file in *.JPG; do convert $file -resize x180 small/$file; done

# you often need to change the orientation information, otherwise some images are shown 90deg rotated:
for file in *.JPG; do convert $file -auto-orient $file; done   # could be done in one operation with resize, maybe

