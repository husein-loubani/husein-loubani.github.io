---
title: 'Artificial Neural Network Based Self-Tuned PID Controller for Flight Control of Quadcopter'

# Authors
# If you created a profile for a user (e.g. the default `admin` user), write the username (folder name) here
# and it will be replaced with their full name and linked to their profile.
authors:
  - admin
  - Salman Bari
  - Syeda Shabih Zehra Hamdani
  - Hamza Ullah Khan
  - Haroon Khan

# Author notes (optional)
author_notes:
  - 'Equal contribution'
  - 'Equal contribution'
  - 'Equal contribution'
  - 'Equal contribution'
  - 'Equal contribution'

date: '2019-05-13T00:00:00Z'
doi: '10.1109/CEET1.2019.8711864'

# Schedule page publish date (NOT publication's date).
publishDate: '2019-05-13T00:00:00Z'

# Publication type.
# Accepts a single type but formatted as a YAML list (for Hugo requirements).
# Enter a publication type from the CSL standard.
publication_types: ['paper-conference']

# Publication name and optional abbreviated publication name.
publication: In 2019 International Conference on Engineering and Emerging Technologies (ICEET)
publication_short: 

abstract: Proportional-Derivative-Integral (PID) controllers have been used for many kinds of systems in academia and industry. Multiple off-line approaches are available for PID tuning. However, physical systems which are subjected to continuous parametric changes and external disturbances require a robust PID controller with continuous auto-tuning. Quadcopter is the perfect example of such system which requires a robust control for stable flight operation. In this paper, a robust PID controller is presented for flight control of quadcopter. The proposed PID tuning algorithm continuously adjusts PID parameters which minimizes tracking error using artificial neural network consisting of a single hidden layer. Sigmoid function is used as activation function. Back-propagation algorithm is used to obtain optimized weights. Comparative analysis of three types of training algorithms (Bayesian regularization, Lavenberg-Marquardt and scaled conjugate gradient) against different number of neurons of hidden layer is performed to obtain minimized Mean Square Error (MSE). The effectiveness of proposed control scheme is witnessed for roll, pitch, yaw and altitude control of quadcopter.
# Summary. An optional shortened abstract.
summary: ''

tags: []

# Display this page in the Featured widget?
featured: true

# Custom links (uncomment lines below)
# links:
# - name: Custom Link
#   url: http://example.org

url_pdf: ''


# Featured image
# To use, add an image named `featured.jpg/png` to your page's folder.


# Associated Projects (optional).
#   Associate this publication with one or more of your projects.
#   Simply enter your project's folder or file name without extension.
#   E.g. `internal-project` references `content/project/internal-project/index.md`.
#   Otherwise, set `projects: []`.
projects: []

# Slides (optional).
#   Associate this publication with Markdown slides.
#   Simply enter your slide deck's filename without extension.
#   E.g. `slides: "example"` references `content/slides/example/index.md`.
#   Otherwise, set `slides: ""`.
slides: ""
---
